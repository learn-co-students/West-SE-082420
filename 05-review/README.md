# mod1-code-review-boating-school

Welcome to Boating School,  a Spongebob activity that simulates a system that tracks Boating Tests.  We have three models - `Student`, `Instructor`, and `BoatingTest`.

Associations:

![alt text][chart]

[chart]: https://curriculum-content.s3.amazonaws.com/module-1/ruby-oo-relationships/practice-boating-school-exercise/Image_123_00BoatingSchool.png

`Student` class:
* [x] should initialize with `first_name`
* [x] `Student.all` should return all of the student instances
* [x] `Student#add_boating_test` should initialize a new boating test with a Student (Object), a boating test name (String), a boating test status (String), and an Instructor (Object)
* [x]`Student.find_student` will take in a first name and output the student (Object) with that name
* [x]`Student#grade_percentage` should return the percentage of tests that the student has passed, a Float (so if a student has passed 3 / 9 tests that they've taken, this method should return the Float `33.33`)

`BoatingTest` class:
* [x] should initialize with Student (Object), a boating test name (String), a boating test status (String), and an Instructor (Object)
* [x]`BoatingTest.all` returns an array of all boating tests

`Instructor` class:
* [x] initialize with a name
* [x]`Instructor.all` should return all instructors
* []`Instructor#pass_student` should take in a student instance and test name. If there is a `BoatingTest` whose name and student match the values passed in, this method should update the status of that BoatingTest to 'passed'. If there is no matching test, this method should create a test with the student, that boat test name, and the status 'passed'. Either way, it should return the `BoatingTest` instance.
* []`Instructor#fail_student` should take in a student instance and test name. Like `#pass_student`, it should try to find a matching `BoatingTest` and update its status to 'failed'. If it cannot find an existing `BoatingTest`, it should create one with the name, the matching student, and the status 'failed'.

Run `ruby tools/console.rb` in console to try out your code. You can add seed data to this file to have some sample objects to try out.

Here is some example seed data:

```
spongebob = Student.new("Spongebob")
patrick= Student.new("Patrick")

puff= Instructor.new("Ms.Puff")
krabs= Instructor.new("Mr.Krabs")

no_crashing = spongebob.add_boating_test("Don't Crash 101", "pending", puff)
power_steering_failure = patrick.add_boating_test("Power Steering 202", "failed", puff)
power_steering_pass = patrick.add_boating_test("Power Steering 201", "passed", krabs)
```

![](https://media.giphy.com/media/GwYxLtDaB3Wso/giphy.gif)
