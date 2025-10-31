// Img assets of the product
import Eames_Molded_Plastic_Dining_Chair from '../assets/Eames_Molded_Plastic_Dining_Chair.png';
import Eames_Molded_Plastic_Rocking_Chair from '../assets/Eames_Molded_Plastic_Rocking_Chair.png';
import Eames_Molded_Plywood_Dining_Chair from '../assets/Eames_Molded_Plywood_Dining_Chair.png';
import Eames_Sofa_Compact from '../assets/Eames_Sofa_Compact.png';
import Eames_Sofa from '../assets/Eames_Sofa.png';
import Eames_Turned_Stool from '../assets/Eames_Turned_Stool.png';
import Eames_Wire_Stool from '../assets/Eames_Wire_Stool.png';

// Product Info
export const productInfo = {
    CATEGORIES: ['ALL', 'CHAIR', 'STOOL', 'SOFA'],
    PRODUCTS: [
        { id: 'c1', name: 'Eames Molded Plastic Dining Chair', category: 'CHAIR', image: Eames_Molded_Plastic_Dining_Chair },
        { id: 'c2', name: 'Eames Molded Plastic Rocking Chair', category: 'CHAIR', image: Eames_Molded_Plastic_Rocking_Chair },
        { id: 'c3', name: 'Eames Molded Plywood Dining Chair', category: 'CHAIR', image: Eames_Molded_Plywood_Dining_Chair },
        { id: 's1', name: 'Eames Turned Stool', category: 'STOOL', image: Eames_Turned_Stool },
        { id: 's2', name: 'Eames Wire Stool', category: 'STOOL', image: Eames_Wire_Stool },
        { id: 'so1', name: 'Eames Sofa', category: 'SOFA', image: Eames_Sofa },
        { id: 'so2', name: 'Eames Sofa Compact', category: 'SOFA', image: Eames_Sofa_Compact },
    ],
};

export const { CATEGORIES, PRODUCTS } = productInfo;
