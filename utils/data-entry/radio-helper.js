import {t, Selector} from 'testcafe';
import {generateRandom} from '../utils';

const Selectors = require('../selectors.json');
const radioOption = Selectors.radio.radioOption;

/**
 * Select Radio By Display Value
 * @param radioGroupSelector
 * @param value
 * @returns {Promise<void>}
 */
async function selectByValue(radioGroupSelector, value) {
    await t.click(Selector(radioGroupSelector).child(radioOption).withText(value));
}

/**
 * Select Radio By Index
 * @param radioGroupSelector
 * @param index
 * @returns {Promise<void>}
 */
async function selectByIndex(radioGroupSelector, index) {
    await t.click(Selector(radioGroupSelector).child(radioOption).nth(index));
}

/**
 * Select Any of the Values
 * @param radioGroupSelector
 * @returns {Promise<void>}
 */
async function selectAny(radioGroupSelector) {
    const optionsCount = Selector(radioGroupSelector).child(radioOption).count;
    const randomOptionIndex = generateRandom(optionsCount);
    await t.click(Selector(radioGroupSelector).child(radioOption).nth(randomOptionIndex));
}

/**
 * Select Any of the Values except excludedValue
 * @param radioGroupSelector
 * @param excludedValue
 * @returns {Promise<void>}
 */
async function selectAnyExcept(radioGroupSelector, excludedValue) {
    const optionsCount = await Selector(radioGroupSelector).child(radioOption).count;
    const values = [];
    for (let i=0; i< optionsCount; i++) {
        values.push(await Selector(radioGroupSelector).child(radioOption).nth(i).innerText);
    }
    const excludedValueIndex = values.findIndex(value => value === excludedValue);
    const randomOptionIndex = generateRandom(optionsCount, excludedValueIndex);
    await t.click(Selector(radioGroupSelector).child(radioOption).nth(randomOptionIndex));
}

/**
 * Select Any of the Values from Array
 * @param radioGroupSelector
 * @param values
 * @returns {Promise<string>}
 */
async function selectAnyOf(radioGroupSelector, values) {
    const optionsCount = values.length;
    const randomOptionIndex = generateRandom(optionsCount);
    await t.click(Selector(radioGroupSelector).child(radioOption).withText(values[randomOptionIndex]));
    return await Selector(radioGroupSelector).child(radioOption).withText(values[randomOptionIndex]).innerText;
}

export {
    selectAnyExcept,
    selectAny,
    selectAnyOf,
    selectByValue
}