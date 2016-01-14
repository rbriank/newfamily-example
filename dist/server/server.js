var express = require('express');
var path = require('path');
var engine = require('ejs-mate');
var port = process.env.PORT || 3000;
var app = express();
app.use('/client', express.static(path.resolve('./client')));
app.use('/node_modules', express.static(path.resolve('./node_modules')));
var renderIndex = function (req, res) {
    res.render(path.resolve('./client/index.html'));
};
app.get('/*', renderIndex);
var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on %s', host, port);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLE9BQU8sV0FBVyxTQUFTLENBQUMsQ0FBQztBQUNwQyxJQUFPLElBQUksV0FBVyxNQUFNLENBQUMsQ0FBQztBQUM5QixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDakMsSUFBSSxJQUFJLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQzVDLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXBCLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXpFLElBQUksV0FBVyxHQUFHLFVBQUMsR0FBb0IsRUFBRSxHQUFxQjtJQUMxRCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQTtBQUVELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBRTNCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQzFCLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDcEMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztJQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNuRSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmltcG9ydCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIGVuZ2luZSA9IHJlcXVpcmUoJ2Vqcy1tYXRlJyk7XG52YXIgcG9ydDogbnVtYmVyID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xudmFyIGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZSgnL2NsaWVudCcsIGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZSgnLi9jbGllbnQnKSkpO1xuYXBwLnVzZSgnL25vZGVfbW9kdWxlcycsIGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZSgnLi9ub2RlX21vZHVsZXMnKSkpO1xuXG52YXIgcmVuZGVySW5kZXggPSAocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkgPT4ge1xuICAgIHJlcy5yZW5kZXIocGF0aC5yZXNvbHZlKCcuL2NsaWVudC9pbmRleC5odG1sJykpO1xufVxuXG5hcHAuZ2V0KCcvKicsIHJlbmRlckluZGV4KTtcblxudmFyIHNlcnZlciA9IGFwcC5saXN0ZW4ocG9ydCwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGhvc3QgPSBzZXJ2ZXIuYWRkcmVzcygpLmFkZHJlc3M7XG4gICAgdmFyIHBvcnQgPSBzZXJ2ZXIuYWRkcmVzcygpLnBvcnQ7XG4gICAgY29uc29sZS5sb2coJ1RoaXMgZXhwcmVzcyBhcHAgaXMgbGlzdGVuaW5nIG9uICVzJywgaG9zdCwgcG9ydCk7XG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
