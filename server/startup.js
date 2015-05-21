Meteor.startup(function () {
  var serviceParams = {
    key: 'pdslsns9eej6syb', //required
    secret: 'onfqe6emmudbaq8', //required
    token: 'igeEVy20fYoAAAAAAAAKid76tGodLAVOowSrcGuTehPwgM80l97Z4cv5_xG83LSD' //required
  };
  dropbox = new Dropbox.Client(serviceParams);
});