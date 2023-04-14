function ideal(totalBudget) {
	const res = {
		housing: [
			totalBudget * 0.25,
			totalBudget * 0.35,
		].map(el => Math.round(el)),
		food: [
			totalBudget * 0.1,
			totalBudget * 0.15,
		].map(el => Math.round(el)),
		insurance: [
			totalBudget * 0.1,
			totalBudget * 0.12,
		].map(el => Math.round(el)),
		transportation: [
			totalBudget * 0.1,
			totalBudget * 0.15,
		].map(el => Math.round(el)),
		savings: [
			totalBudget * 0.15,
			totalBudget * 0.2,
		].map(el => Math.round(el)),
		health: [
			totalBudget * 0.05,
			totalBudget * 0.08,
		].map(el => Math.round(el)),
		clothing: [
			totalBudget * 0.13,
		].map(el => Math.round(el)),
		entertaiment: [
			totalBudget * 0.05,
			totalBudget * 0.1,
		].map(el => Math.round(el)),
		personal: [
			totalBudget * 0.05,
			totalBudget * 0.1,
		].map(el => Math.round(el)),
	};
	return res;
}

function compare(budget, totalBudget) {
	const idealBudget = ideal(totalBudget);
	const comparation = {};
	Object.keys(budget).forEach(el => {
		const result =
			budget[el] -
			idealBudget[el].at(-1);

		comparation[el] = result;
	});
	return comparation;
}

const budget = {
	ideal: ideal,
	compare: compare,
};
console.log(budget.ideal(1300));
console.log(
	budget.compare(
		{
			housing: 455,
			food: 120,
			insurance: 0,
			transportation: 500,
			savings: 200,
			health: 17,
			clothing: 29,
			entertaiment: 70,
			personal: 500,
		},
		1300,
	),
);
