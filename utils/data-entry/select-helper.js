import { t, Selector } from 'testcafe';
import {generateRandom} from '../utils';

const Selectors = require('../selectors.json');
const optionSelector = Selectors.select.optionItem;

/**
 * Select By Display Value
 * @param selector
 * @param value
 * @returns {Promise<void>}
 */
async function selectByValue(selector, displayValue) {
    await t.click(Selector(selector));
    await t.click(Selector(optionSelector).withText(displayValue));
}

/**
 * Select By Index
 * @param selector
 * @param index
 * @returns {Promise<void>}
 */
async function selectByIndex(selector, index){
    await t.click(Selector(selector));
    await t.click(Selector(optionSelector).nth(index));
}

/**
 * Select Any Value
 * @param selector
 * @returns {Promise<string>}
 */
async function selectAny(selector) {
    await t.click(Selector(selector));
    const optionsCount = await Selector(optionSelector).count;
    const randomOptionIndex = generateRandom(optionsCount);
    await t.click(Selector(optionSelector).nth(randomOptionIndex));
    return await Selector(optionSelector).nth(randomOptionIndex).innerText;
}

/**
 * Select Any Value From Array
 * @param selector
 * @param values
 * @returns {Promise<string>}
 */
async function selectAnyOf(selector, values) {
    await t.click(Selector(selector));
    const optionsCount = values.length;
    const randomOptionIndex = generateRandom(optionsCount);
    await t.click(Selector(optionSelector).withText(values[randomOptionIndex]));
    return await Selector(optionSelector).withText(values[randomOptionIndex]).innerText;
}

/**
 * Select Any Value Except
 * @param selector
 * @param excludedValue
 * @returns {Promise<string>}
 */
async function selectAnyExcept(selector, excludedValue) {
    await t.click(Selector(selector));
    const optionsCount = await Selector(optionSelector).count;
    const values = [];
    for (let i=0; i< optionsCount; i++) {
        values.push(await Selector(optionSelector).nth(i).innerText);
    }
    const excludedValueIndex = values.findIndex(value => value === excludedValue);
    const randomOptionIndex = generateRandom(optionsCount, excludedValueIndex);
    await t.click(Selector(optionSelector).nth(randomOptionIndex));
    return await Selector(optionSelector).nth(randomOptionIndex).innerText;
}


export {
    selectByValue,
    selectAnyOf,
    selectByIndex,
    selectAny,
    selectAnyExcept
}