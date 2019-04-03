export interface WelcomeMessage {
  message: string;
  imagePath: string;
}

export const GoodMorningMessage: WelcomeMessage = {
  message: 'GOOD MORNING',
  imagePath: './assets/sunrise.jpg'
};

export const GoodEveningMessage: WelcomeMessage = {
  message: 'GOOD EVENING',
  imagePath: './assets/sunset.jpg'
};

export const GoodNigthMessage: WelcomeMessage = {
  message: 'GOOD NIGTH',
  imagePath: './assets/moon.jpg'
};

export const GoodAfternoonMessage: WelcomeMessage = {
  message: 'GOOD AFTERNOON',
  imagePath: './assets/sun.jpg'
};
