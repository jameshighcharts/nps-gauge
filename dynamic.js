// Function to update the NPS gauge
function updateNpsGauge(score, benchmarkValue) {
    const scoreElement = document.getElementById('nps-score');
    const benchmarkElement = document.getElementById('benchmark');
    const benchmarkLabelElement = document.getElementById('benchmark-label');
    const logoElement = document.getElementById('logo');
    const benchmarkLineElement = document.getElementById('benchmark-line');
    const scoreLineElement = document.getElementById('score-line');
    
    // Ensure score and benchmark are within -100 to 100
    score = Math.max(-100, Math.min(score, 100));
    benchmarkValue = Math.max(-100, Math.min(benchmarkValue, 100));
    
    // Calculate the position based on the score and benchmark
    const scorePositionPercent = ((score + 100) / 200) * 100;
    const benchmarkPositionPercent = ((benchmarkValue + 100) / 200) * 100;
    
    // Update the position of the score indicator
    scoreElement.style.left = scorePositionPercent + '%';
    scoreElement.textContent = score;
    
    // Update the position of the benchmark indicator
    benchmarkElement.style.left = benchmarkPositionPercent + '%';
    benchmarkElement.textContent = benchmarkValue;
    
    // Update the position of the benchmark label
    benchmarkLabelElement.style.left = benchmarkPositionPercent + '%';
    
    // Update the position of the logo
    logoElement.style.left = scorePositionPercent + '%';
  
    // Update the position of the lines
    benchmarkLineElement.style.left = benchmarkPositionPercent + '%';
    scoreLineElement.style.left = scorePositionPercent + '%';
  }
  
  // Initial NPS score and benchmark value
  let npsScore = 33;  // Change this to any value to update the score
  let benchmarkValue = 40;  // Change this to any value to update the benchmark
  
  updateNpsGauge(npsScore, benchmarkValue);
  