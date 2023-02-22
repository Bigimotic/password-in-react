

const PasswordStrengthMeter = () => {
  const [password, setPassword] = useState('');

  const calculatePasswordStrength = () => {
    let strength = 0;
    if (password.match(/[a-zA-Z]/)) {
      strength += 1;
    }
    if (password.match(/[0-9]/)) {
      strength += 1;
    }
    if (password.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)) {
      strength += 1;
    }
    return strength;
  };

  const getPasswordColor = () => {
    const strength = calculatePasswordStrength();
    if (password.length < 8) {
      return 'red';
    }
    switch (strength) {
      case 1:
        return 'red';
      case 2:
        return 'yellow';
      case 3:
        return 'green';
      default:
        return 'gray';
    }
  };

  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <div
          style={{ backgroundColor: getPasswordColor() }}
        >
          Weak
        </div>
        <div
          style={{ backgroundColor: getPasswordColor() === 'gray' ? 'gray' : getPasswordColor() }}
        >
          Medium
        </div>
        <div
          style={{ backgroundColor: getPasswordColor() === 'green' ? 'green' : 'gray' }}
        >
          Strong
        </div>
      </div>
    </div>
  );
};

