interface IFormatNumberDTO {
  type: "currency" | "minutesToTime" | "timeToMinutes";
  data: string | number;
}

export default function formatNumber({ data, type }: IFormatNumberDTO): string {
  if (type === "currency") {
    return Intl.NumberFormat("pt-br", {
      currency: "brl",

      style: "currency",
    }).format(Number(data));
  }

  if (type === "minutesToTime") {
    if (typeof data === "string") {
      return "invalid";
    }

    const minutes = data % 60;
    const hours = (data - minutes) / 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0",
    )}`;
  }

  if (type === "timeToMinutes") {
    if (typeof data === "number") {
      return "invalid";
    }

    const [hours, minutes] = data.split(":");

    const minutesAmount = Number(minutes) + Number(hours) * 60;

    return String(minutesAmount);
  }

  return "invalid";
}
