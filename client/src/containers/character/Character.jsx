import { DragSlot, DragItem, CharacterSlot } from './Slots';
import test_sword_image from './../../assets/images/equipment/swords/buster.png';
import './styles.css';

// DND

export const Character = () => {
  return (
    <div className="home">
      <ul className="character_info">
        <p className="name">Cloud</p>
        {/* Made HP / MP feature */}
        <p className="hp"></p>
        <p className="mp"></p>
      </ul>
      <ul className="hero_model">
        <DragSlot type={CharacterSlot.NECKLACE} />
        <li className="hero_model_element breastplate"></li>
        <li className="hero_model_element pants"></li>
        <DragSlot type={CharacterSlot.WEAPON} />
        <li className="hero_model_element head"></li>
        <li className="hero_model_element portrait"></li>
        <li className="hero_model_element belt"></li>
        <li className="hero_model_element rings"></li>
        <li className="hero_model_element gauntlets"></li>
        <DragSlot type={CharacterSlot.BOOTS} />
        <li className="hero_model_element shield"></li>
      </ul>
      <ul className="inventory">
        <DragItem
          name="YO"
          image={test_sword_image}
          type={CharacterSlot.WEAPON}
        />
        {/* <DragItem name="GO" type={CharacterSlot.BOOTS} /> */}
      </ul>
    </div>
  );
};
