export interface Assignment {
  id: number;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface RoboticsTopic {
  id: number;
  title: string;
  slug: string;
  category: 'Kinematics' | 'Dynamics' | 'Control Systems' | 'Sensors & Actuators' | 'AI & Vision';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
  assignments: Assignment[];
}

export const roboticsTopics: RoboticsTopic[] = [
  {
    id: 1,
    title: 'Introduction to Robot Kinematics',
    slug: 'introduction-to-robot-kinematics',
    category: 'Kinematics',
    difficulty: 'Beginner',
    excerpt: 'Understand the fundamental concepts of robot motion without considering the forces that cause it. Learn about coordinate frames, transformations, and forward kinematics.',
    content: `
      <h2 class="text-2xl font-bold mb-4">What is Kinematics?</h2>
      <p class="mb-4">Robot kinematics is the study of the motion of robots. It deals with the geometric relationships that govern the robot's movement, such as the position, orientation, velocity, and acceleration of the robot's links and joints. It is divided into two main areas: forward kinematics and inverse kinematics.</p>
      
      <h3 class="text-xl font-semibold mb-2">Coordinate Frames and Transformations</h3>
      <p class="mb-4">To describe a robot's position, we attach coordinate frames to each link. The relationship between these frames is described by homogeneous transformation matrices. A 4x4 homogeneous transformation matrix can represent both rotation and translation in 3D space.</p>
      <pre class="bg-muted p-4 rounded-md text-sm mb-4"><code>
T = | R (3x3)  d (3x1) |
    | 0 (1x3)    1     |
      </code></pre>
      <p class="mb-4">Where 'R' is the rotation matrix and 'd' is the translation vector.</p>

      <h3 class="text-xl font-semibold mb-2">Forward Kinematics</h3>
      <p class="mb-4">Forward kinematics is the process of calculating the position and orientation of the robot's end-effector given the values of its joint parameters. This is achieved by chaining together the transformation matrices from the base of the robot to its end-effector.</p>
      <img src="https://picsum.photos/800/400?random=1" alt="Forward Kinematics Diagram" class="rounded-lg my-4" />
      
      <h3 class="text-xl font-semibold mb-2">Denavit-Hartenberg (DH) Parameters</h3>
      <p class="mb-4">The Denavit-Hartenberg convention is a systematic method for defining the coordinate frames for each link and deriving the transformation matrices between them. It uses four parameters (d, θ, r, α) to describe the transformation between two consecutive joints, simplifying the forward kinematics calculation for complex robots.</p>

      <h3 class="text-xl font-semibold mb-2">Inverse Kinematics</h3>
      <p>Inverse kinematics is the reverse problem: calculating the required joint parameters to place the end-effector at a desired position and orientation. This is significantly more complex and may have multiple solutions (e.g., elbow up/down for a robotic arm), or no solution at all if the target is out of reach.</p>
    `,
    image: 'https://picsum.photos/600/400?random=1',
    tags: ['kinematics', 'robot motion', 'transformations', 'dh-parameters', 'beginner'],
    assignments: [
      { id: 1, title: 'Transformation Matrix', description: 'Write a function in Python or MATLAB that takes a rotation and translation and returns the corresponding 4x4 homogeneous transformation matrix.', difficulty: 'Easy' },
      { id: 2, title: '2-Link Arm Kinematics', description: 'For a simple 2-link planar robotic arm with link lengths L1 and L2, and joint angles θ1 and θ2, derive the forward kinematics equations to find the (x, y) position of the end-effector.', difficulty: 'Medium' },
      { id: 3, title: 'DH Parameter Table', description: 'Research the PUMA 560 robot arm and create its Denavit-Hartenberg parameter table.', difficulty: 'Hard' },
    ],
  },
  {
    id: 2,
    title: 'Robot Dynamics and Force Control',
    slug: 'robot-dynamics-and-force-control',
    category: 'Dynamics',
    difficulty: 'Advanced',
    excerpt: 'Explore the relationship between forces, torques, and the motion of a robot. This topic covers Lagrangian and Newton-Euler formulations for dynamic modeling.',
    content: `
      <h2 class="text-2xl font-bold mb-4">Understanding Robot Dynamics</h2>
      <p class="mb-4">While kinematics describes motion, dynamics explains the cause of motion. It involves modeling the forces and torques required to create a desired motion, considering factors like mass, inertia, and external forces. The dynamic model of a robot is typically expressed as: </p>
      <p class="text-center font-mono bg-muted p-4 rounded-md mb-4">M(q)q̈ + C(q, q̇)q̇ + G(q) = τ</p>
      <p class="mb-4">Where 'M' is the mass matrix, 'C' is the Coriolis/centripetal matrix, 'G' is the gravity vector, 'q' represents joint positions, and 'τ' is the vector of joint torques.</p>

      <h3 class="text-xl font-semibold mb-2">Lagrangian Dynamics</h3>
      <p class="mb-4">A powerful, energy-based method. The Lagrangian (L) is defined as the kinetic energy (K) minus the potential energy (P) of the robot: L = K - P. The equations of motion are derived from the Euler-Lagrange equation. This approach is systematic and elegant, though it can be computationally intensive to derive.</p>
      
      <h3 class="text-xl font-semibold mb-2">Newton-Euler Formulation</h3>
      <p class="mb-4">This method applies Newton's second law (F=ma) and Euler's equation for rotational motion to each link of the robot iteratively. It consists of two passes: a forward pass from the base to the end-effector to compute velocities and accelerations, and a backward pass from the end-effector to the base to compute forces and torques. It's computationally efficient and widely used in real-time control.</p>

      <h3 class="text-xl font-semibold mb-2">Force Control</h3>
      <p>In addition to controlling position, many tasks require controlling the force the robot exerts on its environment (e.g., polishing, grinding, assembly). This requires sensors like force-torque sensors and specialized control schemes like impedance control or hybrid force/position control.</p>
    `,
    image: 'https://picsum.photos/600/400?random=2',
    tags: ['dynamics', 'force control', 'lagrangian', 'newton-euler', 'advanced'],
    assignments: [
      { id: 1, title: 'Simple Pendulum Dynamics', description: 'Derive the equation of motion for a simple pendulum using the Lagrangian method.', difficulty: 'Easy' },
      { id: 2, title: 'Inertia Tensor', description: 'Explain what an inertia tensor is and why it is a 3x3 matrix. How does it relate the angular velocity of a link to its angular momentum?', difficulty: 'Medium' },
      { id: 3, title: 'Dynamics Simulator', description: 'Write a simple simulator for a 2-link planar arm that takes joint torques as input and computes the resulting joint accelerations using the dynamic equation.', difficulty: 'Hard' },
    ],
  },
  {
    id: 3,
    title: 'PID Control for Robotic Arms',
    slug: 'pid-control-for-robotic-arms',
    category: 'Control Systems',
    difficulty: 'Intermediate',
    excerpt: 'Learn to implement Proportional-Integral-Derivative (PID) controllers, the workhorse of industrial robotics, to achieve precise position and velocity control.',
    content: `
      <h2 class="text-2xl font-bold mb-4">The PID Controller</h2>
      <p class="mb-4">A PID controller is a control loop feedback mechanism widely used in industrial control systems. It continuously calculates an error value 'e(t)' as the difference between a desired setpoint and a measured process variable and applies a correction based on proportional, integral, and derivative terms.</p>
      <p class="text-center font-mono bg-muted p-4 rounded-md mb-4">Output(t) = Kp * e(t) + Ki * ∫e(τ)dτ + Kd * de(t)/dt</p>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Proportional (P - Kp):</strong> Reacts to the present error. A larger proportional gain results in a faster response but can lead to instability and overshoot.</li>
        <li><strong>Integral (I - Ki):</strong> Accounts for the accumulation of past errors. It eliminates steady-state error but can increase overshoot.</li>
        <li><strong>Derivative (D - Kd):</strong> Predicts future errors based on the current rate of change. It has a damping effect, reducing overshoot and improving stability.</li>
      </ul>
      <h3 class="text-xl font-semibold mb-2">PID Tuning</h3>
      <p class="mb-4">Tuning a PID controller involves finding the optimal values for the Kp, Ki, and Kd gains to achieve the desired system response. Common methods include manual tuning, Ziegler-Nichols, and automated software tuning. The goal is typically to achieve a fast response time with minimal overshoot and zero steady-state error.</p>
      <pre class="bg-muted p-4 rounded-md text-sm mb-4"><code>
// Pseudocode for a PID loop
previous_error = 0
integral = 0
loop:
  error = setpoint - measured_value
  integral = integral + error * dt
  derivative = (error - previous_error) / dt
  output = Kp * error + Ki * integral + Kd * derivative
  previous_error = error
  wait(dt)
      </code></pre>
    `,
    image: 'https://picsum.photos/600/400?random=3',
    tags: ['pid control', 'control theory', 'robotic arm', 'feedback', 'intermediate'],
    assignments: [
      { id: 1, title: 'Component Effects', description: 'For a simple system like cruise control in a car, describe the effect of having only a P controller, a PI controller, and a full PID controller. What problems does each component solve?', difficulty: 'Easy' },
      { id: 2, title: 'Manual Tuning', description: 'Describe the process of manually tuning a PID controller. What is the typical order for tuning the gains (P, I, D) and what is the effect of increasing each one too much?', difficulty: 'Medium' },
      { id: 3, title: 'Anti-Windup', description: 'Research and explain the concept of "integral windup" in PID controllers and describe one common technique to prevent it.', difficulty: 'Hard' },
    ],
  },
  // The other topics would be similarly expanded...
  {
    id: 4,
    title: 'Sensors in Robotics: Vision and Lidar',
    slug: 'sensors-vision-lidar',
    category: 'Sensors & Actuators',
    difficulty: 'Intermediate',
    excerpt: 'Discover how robots perceive their environment. This tutorial covers the principles of computer vision cameras and LiDAR (Light Detection and Ranging) sensors.',
    content: `
      <h2 class="text-2xl font-bold mb-4">Giving Robots Senses</h2>
      <p class="mb-4">Sensors are crucial for any autonomous robot. They provide the data needed for the robot to understand its state (proprioceptive sensors, like encoders) and the state of its environment (exteroceptive sensors, like cameras and LiDAR).</p>
      <h3 class="text-xl font-semibold mb-2">Computer Vision</h3>
      <p class="mb-4">Cameras provide rich, dense 2D data. Using computer vision algorithms, robots can perform tasks like object detection, recognition, tracking, and semantic segmentation. Stereo cameras, which use two cameras side-by-side, can calculate depth information by triangulating points, creating a 3D representation of the scene.</p>
      <h3 class="text-xl font-semibold mb-2">LiDAR (Light Detection and Ranging)</h3>
      <p class="mb-4">LiDAR sensors are active sensors that work by emitting laser beams and measuring the time it takes for the light to reflect off objects. This provides a precise 3D point cloud of the environment. LiDAR is excellent for mapping, localization (figuring out where the robot is), and obstacle avoidance due to its accuracy and reliability in various lighting conditions.</p>
      <h3 class="text-xl font-semibold mb-2">Sensor Fusion</h3>
      <p>Often, no single sensor is perfect. Sensor fusion is the process of combining data from multiple sensors to get a more accurate and reliable understanding of the environment than could be achieved with any single sensor. A common example is fusing high-resolution camera data with accurate LiDAR distance measurements using a Kalman filter.</p>
    `,
    image: 'https://picsum.photos/600/400?random=4',
    tags: ['sensors', 'computer vision', 'lidar', 'perception', 'sensor fusion'],
    assignments: [
      { id: 1, title: 'Sensor Pros and Cons', description: 'Create a table comparing a camera and a LiDAR sensor. List at least three pros and three cons for each.', difficulty: 'Easy' },
      { id: 2, title: 'Stereo Vision', description: 'Explain the principle of stereo vision and the concept of "disparity". Why is it harder to calculate depth for objects that are far away or lack texture?', difficulty: 'Medium' },
      { id: 3, title: 'Point Cloud Processing', description: 'You are given a 3D point cloud from a LiDAR sensor on a self-driving car. Describe the steps you would take to detect other vehicles on the road.', difficulty: 'Hard' },
    ],
  },
  {
    id: 5,
    title: 'AI in Robotics: Path Planning Algorithms',
    slug: 'ai-path-planning-algorithms',
    category: 'AI & Vision',
    difficulty: 'Advanced',
    excerpt: 'Dive into the AI that enables autonomous navigation. Learn about classic algorithms like A* and Dijkstra, and modern sampling-based methods like RRT.',
    content: `
      <h2 class="text-2xl font-bold mb-4">How Robots Find Their Way</h2>
      <p class="mb-4">Path planning is a fundamental problem in robotics: how to find a collision-free path from a start configuration to a goal configuration. This is a core task for mobile robots, autonomous vehicles, and even robot arms.</p>
      <h3 class="text-xl font-semibold mb-2">Configuration Space (C-Space)</h3>
      <p class="mb-4">Instead of planning in the 2D or 3D world, we often plan in the robot's "configuration space". A configuration is a set of parameters that define the robot's state (e.g., the angles of all its joints). In C-Space, the robot becomes a single point, and obstacles in the real world become "C-obstacles".</p>
      <h3 class="text-xl font-semibold mb-2">Grid-Based Algorithms (A*, Dijkstra)</h3>
      <p class="mb-4">These algorithms discretize the world into a grid and search for the shortest path. Dijkstra's algorithm guarantees finding the shortest path, while A* (A-star) is an extension that uses a heuristic to guide the search more efficiently. A* evaluates nodes using the formula <strong>f(n) = g(n) + h(n)</strong>, where g(n) is the cost from the start to node n, and h(n) is the estimated cost from n to the goal.</p>
      <h3 class="text-xl font-semibold mb-2">Sampling-Based Algorithms (RRT)</h3>
      <p>For high-dimensional problems (like a 7-joint robot arm), grid-based methods become computationally infeasible (the "curse of dimensionality"). Rapidly-exploring Random Trees (RRT) work by building a search tree of random samples in the configuration space, quickly finding a feasible (though not necessarily optimal) path.</p>
    `,
    image: 'https://picsum.photos/600/400?random=5',
    tags: ['ai', 'path planning', 'a*', 'rrt', 'navigation', 'c-space'],
    assignments: [
      { id: 1, title: 'Heuristics', description: 'What is an "admissible" heuristic for the A* algorithm? Give an example of a good heuristic for a robot navigating on a 2D grid.', difficulty: 'Easy' },
      { id: 2, title: 'C-Space Obstacle', description: 'Imagine a square mobile robot in a room with a single circular pillar. What does the C-obstacle corresponding to the pillar look like in the robot\'s 2D (x, y) configuration space?', difficulty: 'Medium' },
      { id: 3, title: 'Algorithm Choice', description: 'You need to plan a path for a 7-DOF robot arm in a cluttered environment. Would you use A* or RRT? Justify your choice, explaining the pros and cons of each for this specific problem.', difficulty: 'Hard' },
    ],
  },
  {
    id: 6,
    title: 'Actuators: Motors and Servos',
    slug: 'actuators-motors-servos',
    category: 'Sensors & Actuators',
    difficulty: 'Beginner',
    excerpt: 'Learn about the "muscles" of a robot. This guide covers the basics of DC motors, stepper motors, and servo motors, and how to choose the right one for your project.',
    content: `
      <h2 class="text-2xl font-bold mb-4">Making Robots Move</h2>
      <p class="mb-4">Actuators are the components responsible for moving and controlling a mechanism or system. In robotics, the most common actuators are electric motors.</p>
      <h3 class="text-xl font-semibold mb-2">DC Motors</h3>
      <p class="mb-4">Simple and effective, DC motors provide continuous rotation. Their speed is roughly proportional to voltage and their torque is proportional to current. They are great for driving wheels but lack precise position control without a feedback sensor (like an encoder) and a motor controller (like an H-Bridge).</p>
      <h3 class="text-xl font-semibold mb-2">Stepper Motors</h3>
      <p class="mb-4">Stepper motors move in discrete steps, which allows for precise open-loop position control (no feedback sensor needed). They have high torque at low speeds (holding torque) but can lose steps if overloaded. They are excellent for applications like 3D printers and CNC machines.</p>
      <h3 class="text-xl font-semibold mb-2">Servo Motors</h3>
      <p class="mb-4">A servo motor is a self-contained device that includes a DC motor, a gearbox, a position feedback sensor (potentiometer or encoder), and a controller circuit. This allows it to be commanded to a specific angular position, typically within a 180-degree range. They are extremely popular in hobbyist robotics.</p>
      <h3 class="text-xl font-semibold mb-2">Gearboxes</h3>
      <p>Motors often spin too fast and with too little torque for robotic applications. A gearbox is a mechanical system used to trade speed for torque. A 10:1 gear ratio, for example, will reduce the output speed by a factor of 10 while (ideally) increasing the torque by a factor of 10.</p>
    `,
    image: 'https://picsum.photos/600/400?random=6',
    tags: ['actuators', 'dc motor', 'stepper motor', 'servo', 'gearbox'],
    assignments: [
      { id: 1, title: 'Motor Selection', description: 'You are building a small wheeled robot. Would you use a DC motor, stepper motor, or servo motor for the wheels? Justify your choice.', difficulty: 'Easy' },
      { id: 2, title: 'Torque Calculation', description: 'A motor has a stall torque of 0.5 Nm. You need to lift a 2kg weight at the end of a 0.2m arm. Do you need a gearbox? If so, what is the minimum gear ratio required (assume g=9.8 m/s²)?', difficulty: 'Medium' },
      { id: 3, title: 'Open vs. Closed Loop', description: 'Explain the difference between open-loop and closed-loop control in the context of stepper motors and servo motors.', difficulty: 'Hard' },
    ],
  }
];