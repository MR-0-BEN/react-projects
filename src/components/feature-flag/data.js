const fakeApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToe: true,
  showRandomColorGenerator: true,
  showAccordion: true,
  showTreeView: true,
};

const featureFlagsDataServiceCall = () => {
    return new Promise((resolve, reject) => {
        if (fakeApiResponse) setTimeout(resolve(fakeApiResponse) ,500);
        else reject("There is a error, Please try again!")
    })
}
export default featureFlagsDataServiceCall;

