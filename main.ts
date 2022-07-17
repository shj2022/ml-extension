let activity_level = 0
activityRecognition.start()
let on = true
for (let index = 0; index < 10; index++) {
    if (activityRecognition.updateActivity() == "s") {
        activity_level += 1
    }
    if (activityRecognition.updateActivity() == "w") {
        activity_level += 2
    }
    if (activityRecognition.updateActivity() == "r") {
        activity_level += 3
    }
}
basic.showNumber(activity_level)
