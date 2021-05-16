import "jest";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

import React from 'react'
import Search from '../Search';

describe('Search', () => {
    let wrapper

    test('renders without Error and with no search results visible', () => {
        wrapper = Enzyme.mount(<Search />)

        expect(wrapper).toMatchSnapshot()

        expect(wrapper.find('input').length).toEqual(1)
        //no table because no search results
        expect(wrapper.find('table').length).toEqual(0)
    })

    test ('renders search results when search parm is provided', () => {
        wrapper = Enzyme.mount(<Search />)

        wrapper.find('input').simulate('change', { target: { value: "New York" } })

        //table exists because search results returned
        expect(wrapper.find('table').length).toEqual(1)

        //two rows container New York
        expect(wrapper.find('tbody tr').length).toEqual(2)
    }) 
})