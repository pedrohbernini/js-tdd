import { expect } from 'chai'
import wrapper from '../src/main'

describe('Wrapper', () => {
    describe('Method 1', () => {
        it('should exists method wrapper', () => {
            expect(wrapper).to.exist
        }),
        it('should return the string `bla`', () => {
            expect(wrapper()).to.equal('bla')
        })
    })
})