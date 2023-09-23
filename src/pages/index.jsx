const Home = () => {
  const f = (x) => {
    return x * x;
  };

  const loopF = () => {
    const results = [];
    for (let i = 0; i < 10; i++) {
      results.push(f(i));
    }
    return results;
  };

  return (
    <main>
      <p> This is some simple function x 2. I enter 3 and get: {f(3)}</p>
      <p> I have built a loop from 1 to 9 abd i get: {loopF()}</p>
    </main>
  );
};

export default Home;
