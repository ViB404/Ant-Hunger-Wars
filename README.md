# 🐜 Ant Hunger War

<div align="center">
  <p><em>A browser-based ant colony simulation where tiny creatures battle for survival, food, and glory.</em></p>
  
  [![GitHub stars](https://img.shields.io/github/stars/ViB404/Ant-Hunger-Wars?style=social)](https://github.com/ViB404/Ant-Hunger-Wars/stargazers)
  [![GitHub forks](https://img.shields.io/github/forks/ViB404/Ant-Hunger-Wars?style=social)](https://github.com/ViB404/Ant-Hunger-Wars/network/members)
  [![GitHub issues](https://img.shields.io/github/issues/ViB404/Ant-Hunger-Wars)](https://github.com/ViB404/Ant-Hunger-Wars/issues)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/ViB404/Ant-Hunger-Wars/pulls)
</div>

## 🌟 Overview

**Ant Hunger War** is an interactive simulation that models ant colony behavior with competitive elements. Watch as virtual ants forage for food, establish trails, engage in territorial conflicts, and occasionally return as ghosts. This project demonstrates emergent behavior patterns through simple rule sets and swarm intelligence.

## ✨ Features

- **Dynamic Ant Simulation**: Observe realistic ant foraging behaviors with pheromone trails
- **Competitive Elements**: Ants may enter "rage mode" and fight for food resources
- **Ghost Mechanics**: Fallen ants might return as ghost ants with unique behaviors
- **Fully Customizable**: Adjust all simulation parameters in real-time
- **Educational Value**: Learn about swarm intelligence and emergent behaviors

## 🎮 Simulation Controls & Parameters

| Parameter | Range | Description | Impact |
|-----------|-------|-------------|--------|
| 🐜 **Ant Count** | 1-100 | Population density | Higher values increase competition and system complexity |
| 🍗 **Food Count** | 1-50 | Resource availability | Controls scarcity and abundance dynamics |
| 👻 **Ghost Chance** | 0-100% | Afterlife probability | Influences ecosystem balance and predator-prey ratios |
| 🔴 **Trail Length** | 10-200 | Pheromone persistence | Affects collective memory and path optimization |
| 😡 **Rage Radius** | 5-50 | Territorial threshold | Determines conflict frequency and intensity |
| 🍕 **Food Radius** | 5-50 | Detection sensitivity | Controls foraging efficiency and competition |
| 💨 **Ant Speed** | 1-10 | Movement velocity | Impacts resource acquisition rates and encounter frequency |

## 🚀 Getting Started

### System Requirements

- Modern web browser with HTML5 Canvas support
  - Chrome 80+
  - Firefox 72+
  - Safari 13.1+
  - Edge 80+

### Development Environment

For local development:

```bash
# Clone the repository
git clone https://github.com/ViB404/Ant-Hunger-Wars.git

# Navigate to project directory
cd Ant-Hunger-Wars

# Open the index.html file in any browser
```

### Deployment

The application is statically served and requires no backend. Deploy to any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- Any standard web server

### User Instructions

1. Access the application through your browser
2. Use the control panel to configure simulation parameters
3. Observe emergent behaviors and colony dynamics in real-time
4. Experiment with different parameter combinations to create unique scenarios

## 💻 Tech Stack

<div align="center">
  <table>
    <tr>
      <td align="center" width="33%">
        <img height="60px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <br>HTML5
      </td>
      <td align="center" width="33%">
        <img height="60px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        <br>CSS3
      </td>
      <td align="center" width="33%">
        <img height="60px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <br>JavaScript
      </td>
    </tr>
  </table>
</div>

This project is engineered with modern, lightweight web technologies:

- **HTML5**: Provides semantic structure and Canvas API for real-time graphics rendering
- **CSS3**: Implements responsive design, visual effects, and interface aesthetics 
- **JavaScript**: Powers the simulation engine with object-oriented design patterns

The implementation uses pure vanilla technologies without external dependencies, ensuring optimal performance and minimal overhead.

## 🧪 How It Works
The simulation architecture implements these core computational principles:

1. **Autonomous Agent Behavior**: Each ant operates as an independent entity with its own decision-making logic
2. **Pheromone Communication System**: Digital "scent" trails create a sophisticated stigmergic information network
3. **Resource Detection Algorithm**: Ants employ proximity-based detection mechanisms within configurable perception radii
4. **Conflict Resolution Protocol**: Dynamic interactions occur when entities breach territorial thresholds
5. **State Transformation Engine**: Probabilistic state machine governs ant-to-ghost transformation mechanics

This architecture demonstrates how complex emergent behaviors arise from simple rule-based systems, making it an excellent study in swarm intelligence and multi-agent systems.

## 🔮 Research & Experimentation

The simulation serves as an experimental platform for exploring complex systems and swarm intelligence concepts:

### Suggested Experiments

| Scenario | Setup | Expected Observations |
|----------|-------|------------------------|
| **Population Collapse** | High ghost chance, low food count | Observe system stability thresholds and extinction dynamics |
| **Territorial Warfare** | High rage radius, clustered food distribution | Formation of defensive boundaries and resource monopolies |
| **Optimized Foraging** | Extended trail length, scattered resources | Emergence of efficient path networks and route optimization |
| **Resource Scarcity** | Low food count, high ant population | Competition strategies and adaptive behavior under pressure |
| **Ghost Ecosystem** | 100% ghost chance, varied speed settings | Study of predator-prey relationships and population cycles |

### Applications

This simulation framework demonstrates principles applicable to:

- Distributed logistics and supply chain optimization
- Robotic swarm coordination algorithms
- Traffic flow modeling and optimization
- Self-organizing network protocols
- Resource allocation in competitive environments

## 🛠️ Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for:

- Bug fixes
- New features or mechanics
- Performance improvements
- Documentation enhancements

## 📊 Performance Considerations

The simulation has been optimized for performance with the following considerations:
- Canvas rendering utilizes requestAnimationFrame for optimal frame timing
- Object pooling minimizes garbage collection overhead
- Spatial partitioning reduces computational complexity of entity interactions
- Event-driven architecture minimizes unnecessary calculations

## 🙏 Acknowledgments

- Inspired by real ant colony behavior and swarm intelligence research
- Based on principles from computational biology and artificial life systems
- Special thanks to contributors and beta testers


<div align="center">
  <p>Developed with 🐜 by <a href="https://github.com/ViB404">ViB404</a></p>
  <p>
    <a href="https://twitter.com/share?url=https://github.com/ViB404/Ant-Hunger-Wars">
      <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FViB404%2FAnt-Hunger-Wars" alt="Tweet">
    </a>
  </p>
</div>