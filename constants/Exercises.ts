type Exercise = {
  name: string;
  reps: number;
  description?: string;
  imgs?: string[];
}

const Exercises: Exercise[] = 
  [
    {name: 'pushups', reps: 10, description: 'Form a plank on your hands and feet. Bend your elbows lowering your chest until it is right above the ground. Push back to starting position.', imgs: ['https://res.cloudinary.com/dbbthq6ra/image/upload/v1588463308/nhvcjicayo8cq8bu0maq.jpg', 'https://res.cloudinary.com/dbbthq6ra/image/upload/v1588463308/nhvcjicayo8cq8bu0maq.jpg', 'something']},
    {name: 'squats', reps: 15, description: 'Stand with your knees at hip distance. Bend your knees lowering yourself down and back as if you were sitting in a chair. Stand back up to starting position.', imgs: ['https://res.cloudinary.com/dbbthq6ra/image/upload/v1588463308/nhvcjicayo8cq8bu0maq.jpg']},
    {name: 'rope climbers', reps: 30},
    {name: 'burpees', reps: 10},
    {name: 'high knees', reps: 20},
    {name: 'pushup position to plank position', reps: 10},
    {name: 'kettlebell swings', reps: 15},
    {name: 'standing rows w/ rings', reps: 10},
    {name: 'jumping jacks', reps: 20},
    {name: 'overhead press', reps: 10},
    {name: 'mountain climbers', reps: 20},
    {name: 'deadlifts kettlebell', reps: 10},
    {name: 'planche pushups', reps: 5},
    {name: 'wide pushups', reps: 10},
]

export default Exercises
