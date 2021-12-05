
const chai = window.chai;
const expect = chai.expect;


describe('check_traingle', () => {
  it('This function taking value from input and tell us what kind of triangle we create if ours values are equal 0 and two shorter sides is smaller than the third side do not create triangle', () => {
    expect(check_traingle(4,4,6).equal('It is an isosceles triangle'));
  })
})