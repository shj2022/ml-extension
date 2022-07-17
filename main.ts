input.onButtonPressed(Button.A, function () {
    activity_tracker_on = false
    datalogger.deleteLog()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(activity_level)
})
let activity_level = 0
let activity_tracker_on = false
activity_tracker_on = false
activityRecognition.startTracker()
activity_tracker_on = true
while (activity_tracker_on) {
    datalogger.log(datalogger.createCV("activity", activityRecognition.findActivity()))
    if (activityRecognition.findActivity() == "s") {
        activity_level += 1
    }
    if (activityRecognition.findActivity() == "w") {
        activity_level += 2
    }
    if (activityRecognition.findActivity() == "r") {
        activity_level += 3
    }
}
