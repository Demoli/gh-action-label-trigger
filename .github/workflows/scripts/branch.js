module.exports = ({github, context}) => {
    let target = '';
    if (!context.payload.pull_request) {
      return target;
    }
    context.payload.pull_request.labels.forEach(function (label) {
        if (label.name.indexOf('stage-') !== -1) {
            target = label.name.split('-').pop();
        }

    });

    return target;
}
