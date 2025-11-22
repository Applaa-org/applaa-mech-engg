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
      <h3 class="text-xl font-semibold mb-2">Forward Kinematics</h3>
      <p class="mb-4">Forward kinematics is the process of calculating the position and orientation of the robot's end-effector (the part of the robot that interacts with the environment) given the values of its joint parameters (e.g., angles for revolute joints, displacements for prismatic joints). This is the "easy" part of kinematics, as there is always a unique solution.</p>
      <img src="https://picsum.photos/800/400?random=1" alt="Forward Kinematics Diagram" class="rounded-lg my-4" />
      <h3 class="text-xl font-semibold mb-2">Inverse Kinematics</h3>
      <p>Inverse kinematics is the reverse problem: calculating the required joint parameters to place the end-effector at a desired position and orientation. This is significantly more complex and may have multiple solutions, or no solution at all.</p>
    `,
    image: 'https://picsum.photos/600/400?random=1',
    tags: ['kinematics', 'robot motion', 'transformations', 'beginner'],
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
      <p class="mb-4">While kinematics describes motion, dynamics explains the cause of motion. It involves modeling the forces and torques required to create a desired motion, considering factors like mass, inertia, and external forces (like gravity and friction).</p>
      <h3 class="text-xl font-semibold mb-2">Lagrangian Dynamics</h3>
      <p class="mb-4">A powerful method based on the energy of the system. The Lagrangian is defined as the kinetic energy minus the potential energy of the robot. The equations of motion are derived from the Euler-Lagrange equation. This approach is systematic and provides a deep insight into the system's behavior.</p>
      <h3 class="text-xl font-semibold mb-2">Newton-Euler Formulation</h3>
      <p>This method applies Newton's second law (F=ma) and Euler's equation for rotational motion to each link of the robot, starting from the base and moving outwards. It's computationally efficient and widely used in real-time control.</p>
    `,
    image: 'https://picsum.photos/600/400?random=2',
    tags: ['dynamics', 'force control', 'lagrangian', 'newton-euler'],
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
      <p class="mb-4">A PID controller is a control loop feedback mechanism widely used in industrial control systems. A PID controller continuously calculates an error value as the difference between a desired setpoint and a measured process variable and applies a correction based on proportional, integral, and derivative terms.</p>
      <ul class="list-disc list-inside mb-4">
        <li><strong>Proportional (P):</strong> Reacts to the present error. A larger proportional gain results in a larger response to the current error.</li>
        <li><strong>Integral (I):</strong> Accounts for past errors. It can eliminate the steady-state error that might occur with a P-only controller.</li>
        <li><strong>Derivative (D):</strong> Predicts future errors based on the current rate of change. It has a damping effect, reducing overshoot and oscillations.</li>
      </ul>
      <p>Tuning a PID controller involves finding the optimal values for the P, I, and D gains to achieve the desired system response (e.g., fast response time with minimal overshoot).</p>
    `,
    image: 'https://picsum.photos/600/400?random=3',
    tags: ['pid control', 'control theory', 'robotic arm', 'feedback'],
  },
  {
    id: 4,
    title: 'Sensors in Robotics: Vision and Lidar',
    slug: 'sensors-vision-lidar',
    category: 'Sensors & Actuators',
    difficulty: 'Intermediate',
    excerpt: 'Discover how robots perceive their environment. This tutorial covers the principles of computer vision cameras and LiDAR (Light Detection and Ranging) sensors.',
    content: `
      <h2 class="text-2xl font-bold mb-4">Giving Robots Senses</h2>
      <p class="mb-4">Sensors are crucial for any autonomous robot. They provide the data needed for the robot to understand its state and the state of its environment. Two of the most important exteroceptive sensors are cameras and LiDAR.</p>
      <h3 class="text-xl font-semibold mb-2">Computer Vision</h3>
      <p class="mb-4">Cameras provide rich, dense 2D data about the environment. Using computer vision algorithms, robots can perform tasks like object detection, recognition, tracking, and semantic segmentation. Stereo cameras can even provide 3D depth information.</p>
      <h3 class="text-xl font-semibold mb-2">LiDAR</h3>
      <p>LiDAR sensors work by emitting laser beams and measuring the time it takes for the light to reflect off objects. This provides a precise 3D point cloud of the environment, which is excellent for mapping, localization (figuring out where the robot is), and obstacle avoidance.</p>
    `,
    image: 'https://picsum.photos/600/400?random=4',
    tags: ['sensors', 'computer vision', 'lidar', 'perception'],
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
      <p class="mb-4">Path planning is a fundamental problem in robotics: how to find a collision-free path from a start point to a goal point. This is a core task for mobile robots, autonomous vehicles, and even robot arms.</p>
      <h3 class="text-xl font-semibold mb-2">Grid-Based Algorithms (A*, Dijkstra)</h3>
      <p class="mb-4">These algorithms discretize the world into a grid and search for the shortest path. Dijkstra's algorithm guarantees finding the shortest path, while A* is an extension that uses a heuristic to guide the search more efficiently towards the goal, making it much faster in practice.</p>
      <h3 class="text-xl font-semibold mb-2">Sampling-Based Algorithms (RRT)</h3>
      <p>For high-dimensional problems (like a multi-jointed robot arm), grid-based methods become computationally infeasible. Rapidly-exploring Random Trees (RRT) and its variants work by building a search tree of random samples in the configuration space, quickly finding a feasible (though not necessarily optimal) path.</p>
    `,
    image: 'https://picsum.photos/600/400?random=5',
    tags: ['ai', 'path planning', 'a*', 'rrt', 'navigation'],
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
      <p class="mb-4">Simple and effective, DC motors provide continuous rotation. Their speed is controlled by voltage and their torque by current. They are great for driving wheels but lack precise position control without a feedback sensor (encoder).</p>
      <h3 class="text-xl font-semibold mb-2">Stepper Motors</h3>
      <p class="mb-4">Stepper motors move in discrete steps, which allows for precise position control without a feedback loop. They are excellent for applications like 3D printers and CNC machines where accuracy is key.</p>
      <h3 class="text-xl font-semibold mb-2">Servo Motors</h3>
      <p>A servo motor is a self-contained electrical device that rotates parts of a machine with high efficiency and great precision. It's essentially a DC motor combined with a position feedback sensor and a controller, allowing it to be commanded to a specific angular position.</p>
    `,
    image: 'https://picsum.photos/600/400?random=6',
    tags: ['actuators', 'dc motor', 'stepper motor', 'servo'],
  }
];