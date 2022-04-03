import { DragSlot, DragItem, CharacterSlot } from './Slots';
import './styles.css';
// DND

export const Character = () => {
  return (
    <div className="home">
      <ul className="hero_model">
        <DragSlot type={CharacterSlot.NECKLACE} />
        <li className="hero_model_element breastplate"></li>
        <li className="hero_model_element pants"></li>
        <li className="hero_model_element weapon"></li>
        <li className="hero_model_element head"></li>
        <li className="hero_model_element portrait"></li>
        <li className="hero_model_element belt"></li>
        <li className="hero_model_element rings"></li>
        <li className="hero_model_element gauntlet"></li>
        <DragSlot type={CharacterSlot.BOOTS} />
        <li className="hero_model_element shield"></li>
      </ul>
      <ul className="inventory">
        <DragItem name="YO" type={CharacterSlot.NECKLACE} />
        <DragItem name="GO" type={CharacterSlot.BOOTS} />
      </ul>
    </div>
  );
};
