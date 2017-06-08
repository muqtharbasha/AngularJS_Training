function catViewerController(catService) {
        var vm = this;

        vm.searchOrder = false;
        vm.searchResult = [];
        vm.getSearchResults = function () {
            catService.getCats().then(function (response) {
                vm.searchResult = response;
            });
        }
        vm.getSearchResults();

        vm.orderBy = [{
            value: false,
            text: 'Ascending'
        }, {
            value: true,
            text: 'Descendig'
        }];

        vm.activeCat = {};

        vm.onLabelClick = function (cat) {
            vm.activeCat = cat;
            cat.hasViewed = true;
            vm.activeCat.count = 0;
        }

        vm.onImageClick = function () {
            vm.activeCat.count++;
        }

        vm.voter = function (value) {
            vm.activeCat.voteCount += value;
            vm.searchResult[vm.activeCat.id].voteCount = vm.activeCat.voteCount;
        }

        vm.search = function () {
            vm.activeCat = null;
            vm.searchResult = [];
            if (vm.searchTxt) {
                catService.searchCat(vm.searchTxt).then(function (result) {
                    vm.searchResult = result;
                });
            }
        }
    };