/**
 * Simulation Engine for Career Simulator Platform
 * Handles math models, compatibility scoring, what-if recalculations, and risk metrics.
 */

export function calculateSkillGap(userSkills = {}, targetCareer) {
  if (!targetCareer || !targetCareer.requiredSkills) return { gapList: [], overallReadiness: 0 };

  let totalWeightedAchieved = 0;
  let totalWeight = 0;

  const gapList = targetCareer.requiredSkills.map(skill => {
    const userVal = userSkills[skill.name] || 0;
    const reqVal = skill.requiredLevel;
    const weight = skill.weight || 1.0;

    const achieved = Math.min(100, Math.round((userVal / reqVal) * 100));
    totalWeightedAchieved += achieved * weight;
    totalWeight += weight;

    return {
      skillName: skill.name,
      currentLevel: userVal,
      requiredLevel: reqVal,
      achievedPct: achieved,
      gapPct: Math.max(0, 100 - achieved),
      status: achieved >= 90 ? 'Mastered' : achieved >= 70 ? 'Proficient' : achieved >= 50 ? 'Developing' : 'Needs Focus'
    };
  });

  const overallReadiness = totalWeight > 0 ? Math.min(100, Math.round(totalWeightedAchieved / totalWeight)) : 0;

  return { gapList, overallReadiness };
}

export function calculateCompatibility(userProfile, targetCareer) {
  const { overallReadiness } = calculateSkillGap(userProfile.skills, targetCareer);

  // Experience factor
  const expBonus = Math.min(15, (userProfile.experienceYears || 0) * 5);

  // Projects factor
  const projectBonus = Math.min(10, (userProfile.projectsCount || 0) * 2.5);

  // Internship factor
  const internBonus = userProfile.internshipCompleted ? 8 : 0;

  // Compute final compatibility score capped at 98%
  let score = Math.round(overallReadiness * 0.65 + expBonus + projectBonus + internBonus);

  if (targetCareer.id === 'data-engineer' && userProfile.skills['SQL']) {
    score += 4;
  }

  score = Math.max(25, Math.min(98, score));
  return score;
}

export function runWhatIfSimulation(userProfile, targetCareer, customInputs = {}) {
  const inputs = { ...userProfile, ...customInputs };

  const studyHours = Number(inputs.studyHoursPerDay) || 4;
  const location = inputs.location || "Bangalore";
  const projects = Number(inputs.projectsCount) || 0;
  const hasInternship = Boolean(inputs.internshipCompleted);
  const highAiImpact = Boolean(inputs.highAiImpactToggle);

  // 1. Skill readiness base
  const { overallReadiness, gapList } = calculateSkillGap(inputs.skills, targetCareer);

  // 2. Timeline calculation (Base months adjusted by study hours & preparation intensity)
  const baseMonths = targetCareer.timeToJobReadyBase || 8;
  let timeFactor = 4.0 / studyHours; // 4 hrs is benchmark
  if (projects >= 4) timeFactor -= 0.15;
  if (hasInternship) timeFactor -= 0.15;

  let timelineMonths = Math.max(3, Math.round(baseMonths * timeFactor));

  // 3. Job Readiness Score calculation
  let readiness = Math.round(
    overallReadiness * 0.55 +
    (studyHours / 8) * 20 +
    (projects * 3) +
    (hasInternship ? 10 : 0)
  );
  readiness = Math.max(20, Math.min(99, readiness));

  // 4. Location & Economic Multiplier for Salaries
  let locationMult = 1.0;
  let locationBonusLabel = "Standard Market Rate";
  if (location === "Bangalore" || location === "Hyderabad") {
    locationMult = 1.20;
    locationBonusLabel = "+20% Tech Hub Premium";
  } else if (location === "Mumbai" || location === "NCR (Delhi)") {
    locationMult = 1.15;
    locationBonusLabel = "+15% Metro Premium";
  } else if (location === "Remote (Global)") {
    locationMult = 1.40;
    locationBonusLabel = "+40% Global Currency Multiplier";
  } else if (location === "Chennai" || location === "Pune") {
    locationMult = 1.10;
    locationBonusLabel = "+10% Tier-1 Tech City";
  }

  // Parse salary ranges
  const parseSalary = (salStr, mult) => {
    if (!salStr) return salStr;
    const numMatch = salStr.match(/([\d.]+)/g);
    if (!numMatch) return salStr;
    if (numMatch.length === 1) {
      const val = (parseFloat(numMatch[0]) * mult).toFixed(1);
      return `${val} LPA`;
    }
    const val1 = (parseFloat(numMatch[0]) * mult).toFixed(1);
    const val2 = (parseFloat(numMatch[1]) * mult).toFixed(1);
    return `${val1} - ${val2} LPA`;
  };

  const simulatedSalary = {
    y0: parseSalary(targetCareer.salaryRange.y0.median, locationMult),
    y3: parseSalary(targetCareer.salaryRange.y3.median, locationMult),
    y5: parseSalary(targetCareer.salaryRange.y5.median, locationMult),
    locationBonusLabel
  };

  // 5. Risk Indices calculation under What-If assumptions
  let automationRiskVal = targetCareer.automationRisk;
  if (highAiImpact) {
    automationRiskVal = Math.min(95, automationRiskVal + 22);
  }

  let competitionVal = targetCareer.competition;
  if (location === "Bangalore" || location === "Hyderabad") {
    competitionVal = Math.min(95, competitionVal + 8);
  } else if (location === "Remote (Global)") {
    competitionVal = Math.min(99, competitionVal + 15);
  }

  let entryBarrierVal = targetCareer.entryBarrier;
  if (hasInternship && projects >= 3) {
    entryBarrierVal = Math.max(30, entryBarrierVal - 20);
  }

  const risks = {
    competition: competitionVal,
    entryBarrier: entryBarrierVal,
    automationRisk: automationRiskVal,
    skillVolatility: targetCareer.skillVolatility,
    locationDependency: targetCareer.locationDependency
  };

  return {
    jobReadinessScore: readiness,
    timelineMonths,
    simulatedSalary,
    risks,
    gapList,
    overallReadiness,
    compatibilityScore: calculateCompatibility(inputs, targetCareer)
  };
}
