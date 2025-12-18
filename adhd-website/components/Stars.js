'use client';

export function StarRed({ className = "" }) {
  return (
    <svg
      className={`${className}`}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
    >
      <path
        d="M30 0L33.5 26.5L60 30L33.5 33.5L30 60L26.5 33.5L0 30L26.5 26.5L30 0Z"
        fill="#E74C3C"
      />
    </svg>
  );
}

export function StarGreen({ className = "" }) {
  return (
    <svg
      className={`${className}`}
      width="50"
      height="50"
      viewBox="0 0 60 60"
      fill="none"
    >
      <path
        d="M30 0L33.5 26.5L60 30L33.5 33.5L30 60L26.5 33.5L0 30L26.5 26.5L30 0Z"
        fill="#2ECC71"
      />
    </svg>
  );
}

export function StarYellow({ className = "" }) {
  return (
    <svg
      className={`${className}`}
      width="40"
      height="40"
      viewBox="0 0 60 60"
      fill="none"
    >
      <path
        d="M30 0L33.5 26.5L60 30L33.5 33.5L30 60L26.5 33.5L0 30L26.5 26.5L30 0Z"
        fill="#F39C12"
      />
    </svg>
  );
}

export function StarPink({ className = "" }) {
  return (
    <svg
      className={`${className}`}
      width="45"
      height="45"
      viewBox="0 0 60 60"
      fill="none"
    >
      <path
        d="M30 0L33.5 26.5L60 30L33.5 33.5L30 60L26.5 33.5L0 30L26.5 26.5L30 0Z"
        fill="#FF6B9D"
      />
    </svg>
  );
}

export function Sparkle({ className = "", color = "#E74C3C" }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 0L13.4 10.6L24 12L13.4 13.4L12 24L10.6 13.4L0 12L10.6 10.6L12 0Z"
        fill={color}
      />
    </svg>
  );
}

export function DecorativeStars() {
  return (
    <>
      {/* Top Left */}
      <div className="absolute top-20 left-10 star-float hidden md:block">
        <StarRed />
      </div>
      <div className="absolute top-32 left-24 star-float-delay hidden md:block">
        <Sparkle color="#E74C3C" />
      </div>

      {/* Top Right */}
      <div className="absolute top-24 right-16 star-float-delay hidden md:block">
        <StarGreen />
      </div>
      <div className="absolute top-40 right-32 star-float hidden md:block">
        <Sparkle color="#2ECC71" />
      </div>

      {/* Bottom */}
      <div className="absolute bottom-40 left-20 star-float hidden md:block">
        <StarYellow />
      </div>
      <div className="absolute bottom-32 right-24 star-float-delay hidden md:block">
        <StarPink />
      </div>
    </>
  );
}
