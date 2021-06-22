import React from 'react';
import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en <GitGridItem/>', () => {
    const title='Un titulo';
    const url='http://localhost/algo.jpg';

    test('should de mostrar el texto correctamente ', () => {      
        const wrapper= shallow(<GifGridItem title={title} url={url}/>)
        expect(wrapper).toMatchSnapshot();
    })
    
});
