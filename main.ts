activityRecognition.start()
basic.forever(function () {
    activityRecognition.show(activityRecognition.updateActivity())
})
