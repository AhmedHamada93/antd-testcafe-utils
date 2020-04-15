import * as helper from '../utils/index';

const dropdownSelector = "#select-default";
const multiSelectSelector="#select-multiple";
const inputSelector = "#input-field";
const radioSelector = "#radio-group";
const cascaderSelector = "#cascader";

fixture `Select Helper`
    .page `http://localhost:3000/app/home`
    .beforeEach( async t => {
    await t.setTestSpeed(0.5);
});

test('selectByValue should select given value', async t => {
    await helper.dataEntry.selectHelper.selectAny(dropdownSelector);
    await helper.dataEntry.multiSelectHelper.selectAll(multiSelectSelector);
    await helper.dataEntry.inputHelper.inputFullName(inputSelector);
    await helper.dataEntry.radioHelper.selectAnyExcept(radioSelector, "B");
    await helper.dataEntry.cascaderHelper.selectAny(cascaderSelector);
});