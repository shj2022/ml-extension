// activity_tracker_on = false
// datalogger.deleteLog()
input.onButtonPressed(Button.A, function () {
    activityRecognition.show(activityRecognition.findActivity())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(activity_level)
})
let activity_level = 0
activity_level = 0
basic.forever(function () {
    datalogger.log(datalogger.createCV("activity", activityRecognition.findActivity()))
    if (activityRecognition.findActivity() == "s") {
        activity_level += 0.1
    }
    if (activityRecognition.findActivity() == "w") {
        activity_level += 0.2
    }
    if (activityRecognition.findActivity() == "r") {
        activity_level += 0.3
    }
})
