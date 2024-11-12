import { writeFileSync } from "fs";
import MultivariateNormal from "multivariate-normal";

const n = 1000;

// means of our three dimensions
let meanVector = [0, 0, 0];

// covariance between dimensions.
// between 1st and 2nd: 0.8
// between 1st and 3rd: -0.5
// between 2nd and 3rd: 0.0
let covarianceMatrix = [
    [  1.0, 0.8, -0.5 ],
    [  0.8, 1.0,  0.0 ],
    [ -0.5, 0.0,  1.0 ],
];

let distribution = MultivariateNormal.default(meanVector, covarianceMatrix);

let data = [];
for (let i = 0; i < n; i++) {
    data.push(distribution.sample());
}
// console.log(data);

// writeFileSync("sample.json", JSON.stringify(data, null, "  "))
writeFileSync("sample.json", JSON.stringify(data))

