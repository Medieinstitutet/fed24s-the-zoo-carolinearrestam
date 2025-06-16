export function getHoursSinceFed(lastFed: string): number {
  const now = new Date().getTime();
  const fedTime = new Date(lastFed).getTime();
  return (now - fedTime) / (1000 * 60 * 60);
}

type DetailFeedingStatus = {
  isHungry: boolean;
  warning: boolean;
  hoursSinceFed: number;
};

type OverviewFeedingStatus = "🔴 Hungrig" | "🟠 Snart hungrig" | "✅ Mätt";

export function getFeedingStatus(
  lastFed: string,
  view: "detail"
): DetailFeedingStatus;
export function getFeedingStatus(
  lastFed: string,
  view: "overview"
): OverviewFeedingStatus;

export function getFeedingStatus(lastFed: string, view: "detail" | "overview") {
  const hours = getHoursSinceFed(lastFed);

  if (view === "detail") {
    return {
      isHungry: hours >= 4,
      warning: hours >= 3 && hours < 4,
      hoursSinceFed: hours,
    };
  }

  if (view === "overview") {
    if (hours >= 5) return "🔴 Hungrig";
    if (hours >= 3) return "🟠 Snart hungrig";
    return "✅ Mätt";
  }

  return "✅ Mätt";
}
