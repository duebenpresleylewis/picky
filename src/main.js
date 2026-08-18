import './style.css'
import './styles/modal.css';
import { initialiseModal } from './scripts/modal.js';
import { initialiseChangeColor } from './scripts/changeColor.js'
import { initialiseAutoFill } from './scripts/autoFill.js';

// initialises modal features for user
initialiseModal();

// initialises main color changing feature
initialiseChangeColor();

// initialises search input auto fill / suggestion feature
initialiseAutoFill();
