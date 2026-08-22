import './style.css'
import './styles/modal.css';
import './styles/suggestions.css';
import './styles/loader.css';
import { initialiseModal } from './scripts/modal.js';
import { initialiseAutoFill } from './scripts/autoFill.js';
import { initialiseChangeColor } from './scripts/changeColor.js'

// initialises modal features for user
initialiseModal();

// initialises main color changing feature
initialiseChangeColor();

// initialises search input auto fill / suggestion feature
initialiseAutoFill();
