/**
 * Created by brezh on 27.09.2016.
 */
app.filter("byName", function() {
    return function(input, search) {
        var filtered = []
        if (search) {
            angular.forEach(input, function(item) {
                if (item.name.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                    filtered.push(item)
                }
            })

            return filtered;
        } else {
            return input
        }
    }
});