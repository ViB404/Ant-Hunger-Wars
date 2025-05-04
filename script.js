window.onload = () => {
    const infoBtn = document.getElementById("infoBtn");
    const infoDialog = document.getElementById("infoDialog");
    const closeDialog = document.getElementById("closeDialog");
  
    // Open the dialog when Info button is clicked
    infoBtn.addEventListener("click", () => {
      infoDialog.style.display = "block";
    });
  
    // Close the dialog when the "x" is clicked
    closeDialog.addEventListener("click", () => {
      infoDialog.style.display = "none";
    });
  
    // Close the dialog if the user clicks anywhere outside of the dialog content
    window.addEventListener("click", (event) => {
      if (event.target === infoDialog) {
        infoDialog.style.display = "none";
      }
    });
  
    const canvas = document.getElementById("antCanvas");
    const ctx = canvas.getContext("2d");
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.onresize = resizeCanvas;
  
    const settings = {
      NUM_ANTS: 5,
      FOOD_COUNT: 10,
      GHOST_CHANCE: 0.5,
      TRAIL_LENGTH: 15,
      RAGE_RADIUS: 6,
      FOOD_RADIUS: 6,
      ANT_SPEED: 2,
    };
  
    let totalAntsCreated = settings.NUM_ANTS;
    let ants = Array.from({ length: settings.NUM_ANTS }, () => createAnt());
  
    function createAnt(
      x = Math.random() * canvas.width,
      y = Math.random() * canvas.height
    ) {
      return {
        x,
        y,
        angle: Math.random() * 2 * Math.PI,
        carryingFood: false,
        rage: false,
        trail: [],
      };
    }
  
    let foodList = Array.from({ length: settings.FOOD_COUNT }, () =>
      createFood()
    );
  
    function createFood() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        isGhost: Math.random() < settings.GHOST_CHANCE,
      };
    }
  
    // Update the tooltip based on control inputs
    function updateTooltip(inputId, tooltipId) {
      const input = document.getElementById(inputId);
      const tooltip = document.getElementById(tooltipId);
      tooltip.textContent = input.value; // Update tooltip text with the slider value
    }
  
    function setupControls() {
      const controls = [
        { inputId: "numAnts", tooltipId: "numAntsTooltip", setting: "NUM_ANTS" },
        { inputId: "foodCount", tooltipId: "foodCountTooltip", setting: "FOOD_COUNT" },
        { inputId: "ghostChance", tooltipId: "ghostChanceTooltip", setting: "GHOST_CHANCE" },
        { inputId: "trailLength", tooltipId: "trailLengthTooltip", setting: "TRAIL_LENGTH" },
        { inputId: "rageRadius", tooltipId: "rageRadiusTooltip", setting: "RAGE_RADIUS" },
        { inputId: "foodRadius", tooltipId: "foodRadiusTooltip", setting: "FOOD_RADIUS" },
        { inputId: "antSpeed", tooltipId: "antSpeedTooltip", setting: "ANT_SPEED" },
      ];
  
      controls.forEach(({ inputId, tooltipId, setting }) => {
        const input = document.getElementById(inputId);
        
        // Set initial value from settings
        input.value = settings[setting];
        
        input.addEventListener("input", () => {
          // Update tooltip
          updateTooltip(inputId, tooltipId);
          
          // Update setting value
          const newValue = inputId === "ghostChance" ? parseFloat(input.value) : parseInt(input.value);
          settings[setting] = newValue;
          
          // Special handling for certain settings
          if (inputId === "numAnts") {
            // Adjust ant count
            const diff = newValue - ants.length;
            if (diff > 0) {
              // Add more ants
              for (let i = 0; i < diff; i++) {
                ants.push(createAnt());
                totalAntsCreated++;
              }
            } else if (diff < 0) {
              // Remove ants
              ants = ants.slice(0, newValue);
            }
          } else if (inputId === "foodCount") {
            // Adjust food count
            const diff = newValue - foodList.length;
            if (diff > 0) {
              // Add more food
              for (let i = 0; i < diff; i++) {
                foodList.push(createFood());
              }
            } else if (diff < 0) {
              // Remove food
              foodList = foodList.slice(0, newValue);
            }
          }
        });
        
        // Initial tooltip update
        updateTooltip(inputId, tooltipId);
      });
    }
  
    setupControls();
  
    function updateAnts() {
      for (let ant of ants) {
        ant.angle += (Math.random() - 0.5) * 0.2;
        ant.x =
          (ant.x + Math.cos(ant.angle) * settings.ANT_SPEED + canvas.width) % canvas.width;
        ant.y =
          (ant.y + Math.sin(ant.angle) * settings.ANT_SPEED + canvas.height) % canvas.height;
  
        ant.trail.push({ x: ant.x, y: ant.y });
        if (ant.trail.length > settings.TRAIL_LENGTH) ant.trail.shift();
  
        // Check if ants are interacting with food
        for (let i = foodList.length - 1; i >= 0; i--) {
          const food = foodList[i];
          const dx = food.x - ant.x;
          const dy = food.y - ant.y;
          const dist = Math.hypot(dx, dy);
  
          if (dist < settings.FOOD_RADIUS) {
            if (food.isGhost) {
              console.log("👻 Ghost food! Rage mode unlocked.");
              ant.rage = true;
            } else {
              console.log("🍗 Real food! Reproducing...");
              ant.carryingFood = true;
              ants.push(createAnt(ant.x, ant.y));
              totalAntsCreated++;
            }
            foodList.splice(i, 1);
            foodList.push(createFood());
          }
        }
  
        // Ants carrying food and interacting with rage ants
        if (ant.carryingFood) {
          for (let i = ants.length - 1; i >= 0; i--) {
            const other = ants[i];
            if (other !== ant && other.rage) {
              const dx = other.x - ant.x;
              const dy = other.y - ant.y;
              const dist = Math.hypot(dx, dy);
  
              // Rage ant cannot eat food-carrying ant unless within rage radius
              if (dist < settings.RAGE_RADIUS) {
                console.log("Ant carrying food eaten by a rage ant!");
                ants.splice(i, 1); // Remove the rage ant
                ant.carryingFood = false; // The carrying ant loses food
                break;
              }
            }
          }
        }
  
        // Rage ants attacking
        if (ant.rage) {
          for (let i = ants.length - 1; i >= 0; i--) {
            const other = ants[i];
            if (other !== ant) {
              const dx = other.x - ant.x;
              const dy = other.y - ant.y;
              const dist = Math.hypot(dx, dy);
  
              // Rage ant attacks another ant if within range
              if (dist < settings.RAGE_RADIUS) {
                console.log("😡 Rage ant attacks and eats another!");
                ants.splice(i, 1); // Remove the attacked ant
                ant.rage = false; // Rage ends after attack
                break;
              }
            }
          }
        }
      }
    }
  
    function drawAnts() {
      for (let ant of ants) {
        for (let i = 0; i < ant.trail.length; i++) {
          const t = ant.trail[i];
          const alpha = ((i + 1) / ant.trail.length) * 0.5;
  
          ctx.fillStyle = ant.rage
            ? `rgba(255, 0, 0, ${alpha})`
            : ant.carryingFood
            ? `rgba(0, 255, 0, ${alpha})`
            : `rgba(0, 0, 255, ${alpha})`;
  
          ctx.fillRect(t.x, t.y, 2, 2);
        }
  
        ctx.fillStyle = ant.rage
          ? "red"
          : ant.carryingFood
          ? "lime"
          : "lightblue";
  
        ctx.fillRect(ant.x, ant.y, 4, 4);
      }
    }
  
    function drawFood() {
      for (let food of foodList) {
        ctx.fillStyle = food.isGhost ? "rgba(255, 255, 255, 0.3)" : "yellow";
        ctx.beginPath();
        ctx.arc(food.x, food.y, 5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  
    let lastFrameTime = performance.now();
    let fpsHistory = [];
    let fps = 0;
  
    function drawHUD() {
      const now = performance.now();
      const delta = now - lastFrameTime;
      lastFrameTime = now;
  
      const currentFPS = 1000 / delta;
      fpsHistory.push(currentFPS);
      if (fpsHistory.length > 30) fpsHistory.shift();
      fps = Math.round(fpsHistory.reduce((a, b) => a + b) / fpsHistory.length);
  
      const survivalPercent = ((ants.length / totalAntsCreated) * 100).toFixed(1);
  
      ctx.fillStyle = "white";
      ctx.font = "bold 36px monospace";
      ctx.textAlign = "center";
      ctx.fillText("🪓 ANT HUNGER WARS 🍖", canvas.width / 2, 50);
  
      ctx.textAlign = "left";
      ctx.font = "18px monospace";
      ctx.fillText(`🛡️ Survival: ${survivalPercent}%`, 20, 80);
      ctx.fillText(`🐜 Alive: ${ants.length}`, 20, 100);
      ctx.fillText(`💀 Total Born: ${totalAntsCreated}`, 20, 120);
      ctx.fillText(`⚡ FPS: ${fps}`, 20, 140);
    }
  
    function gameLoop() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      updateAnts();
      drawFood();
      drawAnts();
      drawHUD();
  
      requestAnimationFrame(gameLoop);
    }
  
    gameLoop();
  };
