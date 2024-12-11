const shuffle = (questions) => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }

  export default shuffle;