angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})


.controller('sidemenu',function($scope,$rootScope){
    
    $rootScope.sidemenu = [
        {title:'Web Development',id:1,bg:'http://www.techvezoto.com/wp-content/uploads/2016/06/Mobile-Development-banner.png',des:'From concept and strategy to design and implementation Tech Vezoto builds premium websites and custom made online solutions for businesses, organizations and individuals to fulfill their needs.Our Development team helps you to turn your innovative business idea into reality. App development is nothing different from developing an art masterpiece and we are exp and strategy to des ntation Tech Vezoto builds premium websites and custom made online solutions for businesses, organizations and individuals to fulfill their needs.Our Development team helps you to turn your innovative business idea into reality. App development is nothing different from developing an art masterpiece and we are expert in it',icon:'http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Html-tags-icon.png'},
        {title:'Software Development',id:2,bg:'http://www.techvezoto.com/wp-content/uploads/2016/06/process-image-1.jpg',des:'From concept and strategy to design and implementation Tech Vezoto builds premium websites and custom made online solutions for businesses, organizations and individuals to fulfill their needs.Our Development team helps you to turn your innovative business idea into reality. App development is nothing different from developing an art masterpiece and we are expert in it From concept and  d implementation Tech Vezoto builds premium websites and custom made online solutions for businesses, organizations and individuals to fulfill their needs.Our Development team helps you to turn your innovative business idea into reality. App development is nothing different from d s you to turn your innovative business idea into reality. App development is nothing different from developing an art masterpiece and we are expert in it From concept and strategy to design and implementat',icon:''},
        {title:'Hybrid App Dvelopment',id:3,bg:'http://www.techvezoto.com/wp-content/uploads/2016/06/GraphicDesigns-banner.png',des:'ites and custom made online solutions for businesses, organizations and individuals to fulfill their needs.Our Development team helps you to turn your innovativ eir needs.Our Development team helps you to turn your innovative business idea into reality. App development is nothing different from developing an art masterpiece and we are expert in it From concept and strategy to design and implementation Tech Vezoto builds premium websites and custom made onl',icon:''},
        {title:'SMM',id:4,bg:'http://www.techvezoto.com/wp-content/uploads/2016/06/process-image-1.jpg',des:'From concept and strategy to design and implementation Tech Vezoto builds premium websites and custom made online solutions for businesses, organizations and individuals to fulfill their needs.Our Development team helps you to turn your innovative business idea into reality. App development is nothing different from developing an art masterpiece and we are expert in it From concept and strategy to design and implementation Tech Vezoto builds premium websites and custom made online solutions for businesses, organizations and individuals   business idea into reality. App development is nothing different from developing an art masterpiece and we are expert in it From concept and strategy to design and implementat',icon:''},
        {title:'SEO',id:5,bg:'http://www.techvezoto.com/wp-content/uploads/2016/06/SocialMedia-banner.png',des:'From concept and strategy to design and implementation Tech Vezoto builds premium websites and custom made online solutions for businesses, organizations and individuals to fulfill their needs.Our Development team helps you to turn your innFrom concept and strategy to design and implementation Tech Vezoto builds premium websites and custom made online solutions for businesses, organizations and individuals to fulfill their needs.Our Development team helps you to turn your innovative business idea into reality. App development is nothing different from developing an art masterpiece and we are expert in it From concept and strategy to desig fulfill their needs.Our Development team helps you to turn your innovative business idea into reality. App development is nothing diffe ent from developing an art masterpiece and we are expert in it From concept and strategy to design and implementatnd custom made online solutions for businesses, organizations and individuals to fulfill their needs.Our Development team helps you to turn your innovative business idea into reality. App development is nothing different from developing an art masterpiece and we are expert in it From concept and strategy to design and implementation Tech Vezoto builds premium websites and custom made online solutions for businesses, organizations and individuals to fulfill their needs.Our Development team helps you to turn your innovative business idea into reality. App development is nothing different from developing an art masterpiece and we are expert in it From concept and strategy to design and implementat',icon:''},
        {title:'Grphic Design',id:6,des:'From concept and strategy to design and implementation Tech Vezoto builds premium websites and custom made online solutions for businesses, organizations and individuals to fulfill their needs.Our Development team helps you to turn your innovative business idea into reality. App development is nothing different from developing an art masterpiece and we are expert in it From concept and strategy to design and implementation Tech Vezoto builds premium websites and custom made online solutions for businesses, organizations and individuals to fulfill their needs.Our Development team helps you to turn your innovative business idea into reality. App development is nothing different from developing an art masterpiece and we are expert in it From concept and strategy to design and implementation Tech Vezoto builds premium websites and custom made online solutions for businesses, organizations and individuals to fulfill their needs.Our Development team helps you to turn your innovative business idea into reality. App development is nothing different from developing an art masterpiece and we are expert in it From concept and strategy to design and implementation Tech Vez m concept and strategy to design and implementat needs.Our Development team helps you to turn your innovative business idea into reality. App development is nothing different from developing an art masterpiece and we are expert in it From concept and strategy to design and implementat',bg:'http://www.techvezoto.com/wp-content/uploads/2016/06/Mobile-Development-banner.png',icon:''}
        
        
    ];
    
    $scope.teamLead=[
        
        {name:'Tayyab Naqvi'
},
        {name:'Waqar Bhatti'}
        
    ]; 
    
    
    $scope.clients=[
        
        {name:'Masood',bg:'blue'
},
        {name:'Crep Stop',bg:'yellow'},
        {name:'PPA',bg:'pink'
},
        {name:'Penatx Pakistan',bg:'red'},
        {name:'FEME',bg:'pink'
},
        {name:'Cavalry Hospital',bg:'green'}
        
    ];
    
})


.controller('home',function($scope,$rootScope){
    
    
    $scope.images = [
        {
            url:'http://www.techvezoto.com/wp-content/uploads/2016/06/GraphicDesigns-banner-450x300.png'
        },
        {
            url:'http://www.techvezoto.com/wp-content/uploads/2016/06/SocialMedia-banner-450x300.png'
        },
    ];
    
    $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  }
    
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
    
})



.controller('detail', function($scope, $stateParams,$rootScope) {
    
    var id = $stateParams.detailId;
    $scope.title="";
    $scope.bg="";
    $scope.des="";
    $scope.icon="";
    
    for(var i =0 ; i< $rootScope.sidemenu.length;i++){
        
        if( id == $rootScope.sidemenu[i].id ){
            
            $scope.title = $rootScope.sidemenu[i].title;
            $scope.bg = $rootScope.sidemenu[i].bg;
            $scope.des = $rootScope.sidemenu[i].des;
            $scope.icon = $rootScope.sidemenu[i].icon;
            
        }
    }
    
    // $rootScope.sidemenu
    
});
