const analytics = (arr: number[]): void => {
    console.log(arr.map(el => el * 2));
    console.log('Analytics...');
    console.log(arr.map(el => el * 3));
}
analytics([1,2,3])