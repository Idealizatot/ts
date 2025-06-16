const sums = [1, 5, 100];

const state: {sumAfterConvert: number[]} = {
    sumAfterConvert: []
};

const getValueByAmount = (amount: number) => {
    return state.sumAfterConvert[amount];
};
