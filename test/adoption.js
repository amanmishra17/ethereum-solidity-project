var Adoption = artifacts.require("Adoption");

contract("Adoption", function(_accounts) {
  describe('first group of test', ()=>{
    let instance;

    before(async() => {
      instance = await Adoption.deployed();

      });

      it('user should adopt a pet',async () => {
        await instance.adopt.sendTransaction(8, {from: _accounts[0]});
        let adopters = await instance.adopters.call(8);
        assert.equal(adopters,_accounts[0],"Incorrect owner address");

      });

      it('should get adopters addresss by pet id in array',async() => {
        let adopters = await instance.getAdopters.call();
        assert.equal(adopters[8], _accounts[0], "owner of the pet id should be recorded in the array")

      });
  });
});
