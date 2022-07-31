// GENDER
import male from './gender/male.png';
import female from './gender/female.png';

// RACES IMAGES
import dwarf from './races/dwarf.jpeg';
import dwarfFemale from './races/dwarf_w.jpeg';
import elf from './races/elf.jpeg';
import elfFemale from './races/elf_w.jpeg';
import orc from './races/orc.jpeg';
import orcFemale from './races/orc_w.jpeg';
import human from './races/human.jpeg';
import humanFemale from './races/human_w.jpeg';

// ROLES IMAGES
import cleric from './roles/cleric.jpeg';
import healer from './roles/healer.jpeg';
import mage from './roles/mage.jpeg';
import ranger from './roles/ranger.jpeg';
import templar from './roles/templar.jpeg';
import warrior from './roles/warrior.jpeg';

export const images = {
  gender: [
    { name: 'male', title: 'male', image: male },
    { name: 'female', title: 'female', image: female },
  ],
  races: [
    { name: 'dwarf', title: 'dwarf', image: dwarf },
    { name: 'dwarfFemale', title: 'dwarf', image: dwarfFemale },
    { name: 'elf', title: 'elf', image: elf },
    { name: 'elfFemale', title: 'elf', image: elfFemale },
    { name: 'orc', title: 'orc', image: orc },
    { name: 'orcFemale', title: 'orc', image: orcFemale },
    { name: 'human', title: 'human', image: human },
    { name: 'humanFemale', title: 'human', image: humanFemale },
  ],
  roles: [
    { name: 'cleric', title: 'cleric', image: cleric },
    // { name: 'healer', title: 'healer', image: healer },
    { name: 'mage', title: 'mage', image: mage },
    { name: 'ranger', title: 'ranger', image: ranger },
    { name: 'templar', title: 'templar', image: templar },
    { name: 'warrior', title: 'warrior', image: warrior },
  ],
};
