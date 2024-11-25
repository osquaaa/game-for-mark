<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Click the Coin</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
    #coin {
      width: 100px;
      height: 100px;
      background: gold;
      border-radius: 50%;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 24px;
      font-weight: bold;
      color: white;
      text-shadow: 1px 1px 2px #000;
      user-select: none;
    }
    #score {
      margin-top: 20px;
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }
  </style>
</head>
<body>
  <div id="coin">💰</div>
  <div id="score">Score: 0</div>

  <script src="game.js"></script>
</body>
</html>