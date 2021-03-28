import React from 'react';
import ReactDOM from 'react-dom';

import { Dashboard } from '../components/Dashboard';

describe('Teste do componente Dashboard', () => {

    it('Deve renderizar o componente', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Dashboard />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});