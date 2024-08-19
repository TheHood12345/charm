import React, { useState } from 'react';

const SpinToWin: React.FC = () => {
  const [rotation, setRotation] = useState<number>(0);
  const [spinning, setSpinning] = useState<boolean>(false);
  const [prize, setPrize] = useState<string | null>(null);

  const segments: string[] = [
    '1111111111111111111',
    '222222222222222',
    '33333333333333',
    '444444444444444',
    '5',
    '6',
    '7',
    '8',
  ];
  const segmentDegrees: number = 360 / segments.length;

  const spinWheel = (): void => {
    if (spinning) return;

    const randomSpin: number = Math.floor(Math.random() * 360) + 3600; // 3600 to 3960 degrees
    const selectedSegmentIndex: number = Math.floor((randomSpin % 360) / segmentDegrees);

    setRotation(rotation + randomSpin); // Add to current rotation for continuous clockwise spin
    setSpinning(true);
    setPrize(null);

    setTimeout(() => {
      setSpinning(false);
      setPrize(segments[selectedSegmentIndex]);
    }, 4000); // matches animation duration
  };

  return (
    <div style={styles.container}>
      <div style={styles.pointer} />
      <div
        style={{
          ...styles.wheel,
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 4s ease-out',
          pointerEvents: spinning ? 'none' : 'auto',
        }}
      >
        {segments.map((segment, index) => (
          <div
            key={index}
            style={{
              ...styles.segment,
              transform: `rotate(${index * segmentDegrees}deg)`,
              backgroundColor: index % 2 === 0 ? '#eee' : '#ddd',
            }}
          >
            <span style={styles.segmentText}>{segment}</span>
          </div>
        ))}
      </div>
      <button onClick={spinWheel} disabled={spinning} style={styles.button}>
        {spinning ? 'Spinning...' : 'Spin'}
      </button>
      {prize && <p style={styles.prize}>You won: {prize}!</p>}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    marginTop: '50px',
    position: 'relative' as const,
  },
  pointer: {
    width: 0,
    height: 0,
    borderLeft: '15px solid transparent',
    borderRight: '15px solid transparent',
    borderBottom: '30px solid red',
    position: 'absolute' as const,
    top: 'calc(50% - 125px)', // Position above the wheel
    left: 'calc(50% - 15px)', // Center horizontally
    zIndex: 1,
  },
  wheel: {
    position: 'relative' as const,
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    border: '5px solid #ccc',
    overflow: 'hidden',
  },
  segment: {
    position: 'absolute' as const,
    width: '50%',
    height: '50%',
    top: '50%',
    left: '50%',
    transformOrigin: '0% 0%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    padding: '10px'
  },
  segmentText: {
    transform: 'rotate(45deg)', // Correct the rotation to align the text
    fontSize: '16px',
    fontWeight: 'bold' as const,
    textAlign: 'center' as const,
    width: '100%',
    whiteSpace: 'nowrap',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  prize: {
    marginTop: '20px',
    fontSize: '18px',
    fontWeight: 'bold' as const,
  },
};

export default SpinToWin;
