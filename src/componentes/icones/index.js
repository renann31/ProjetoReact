function WeatherIcon({ iconCode, className }) {
  // mapeia o código da API para um tipo visual
  const typeMap = {
    "01d": "sun",
    "01n": "sun",
    "02d": "cloud-sun",
    "02n": "cloud-sun",
    "03d": "cloud",
    "03n": "cloud",
    "04d": "cloud",
    "04n": "cloud",
    "09d": "rain",
    "09n": "rain",
    "10d": "rain",
    "10n": "rain",
    "11d": "storm",
    "11n": "storm",
  };

  const type = typeMap[iconCode] || "cloud";

  return (
    <svg
      viewBox="0 0 64 64"
      className={`icone ${type} ${className || ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* SOL */}
      {type === "sun" && (
        <>
          <circle cx="32" cy="32" r="12" />
          <line x1="32" y1="4" x2="32" y2="12" />
          <line x1="32" y1="52" x2="32" y2="60" />
          <line x1="4" y1="32" x2="12" y2="32" />
          <line x1="52" y1="32" x2="60" y2="32" />
        </>
      )}

      {/* NUVEM */}
      {(type === "cloud" || type === "cloud-sun") && (
        <path d="M20 44h24a10 10 0 0 0 0-20 14 14 0 0 0-28-4A10 10 0 0 0 20 44z" />
      )}

      {/* SOL + NUVEM */}
      {type === "cloud-sun" && (
        <circle cx="22" cy="22" r="8" />
      )}

      {/* CHUVA */}
      {type === "rain" && (
        <>
          <line x1="24" y1="46" x2="24" y2="56" />
          <line x1="32" y1="46" x2="32" y2="56" />
          <line x1="40" y1="46" x2="40" y2="56" />
        </>
      )}

      {/* TEMPESTADE */}
      {type === "storm" && (
        <polyline points="30 44 24 60 38 44 32 44" />
      )}
    </svg>
  );
}

export default WeatherIcon;