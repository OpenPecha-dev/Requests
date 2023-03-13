
class RFC {
    constructor(RFC) {
        this.bodyLines = RFC.split(/\r?\n/)
        this.workItemsSection = this.parseWorkItemsSection()
    }

    parseWorkItemsSection() {
        const start = this.bodyLines.findIndex(line => line.includes('<h3 id="implementation">Implementation</h3>'))
        const end = this.bodyLines.findIndex(line => line.includes('<h3 id="implementation">Completion</h3>'))
        return { start, end }
    }

    getWorkItems() {
        const workItems = []
        for (let nLine = this.workItemsSection.start; nLine < this.workItemsSection.end; nLine++) {
            const line = this.bodyLines[nLine]
            if (line.includes('- [ ]')) {
                const title = line.replace('- [ ]', '').trim()
                const [org, repoAndIsssue] = title.split('/')
                const [repo, issue] = repoAndIsssue.split('#')
                workItems.push({nLine, org, repo, issue})
            }
        }
        return workItems
    }

    markWorkItemAsCompleted(workItemIdx) {
        const line = this.bodyLines[workItemIdx]
        if (line.includes('- [ ]')) {
            this.bodyLines[workItemIdx] = line.replace('- [ ]', '- [x]')
        }
    }

    setActualTime(workItemIdx, startedAt, endedAt) {
        const startedDate = new Date(startedAt);
        const endedDate = new Date(endedAt);
        const milliseconds = Math.abs(endedDate - startedDate);
        const hoursInPercent = milliseconds / 36e5
        const hours = Math.floor(hoursInPercent)
        const minutesPercent = hoursInPercent - hours
        const minutes = Math.floor(minutesPercent * 60)
        const minutesZeroPadded = minutes.toString().padStart(2, '0')

        const timeLine = this.bodyLines[workItemIdx + 2]
        if (timeLine.includes('Actual time:')) {
            this.bodyLines[workItemIdx + 2] += ` ${hours}:${minutesZeroPadded} ${'hr' + (hours > 1 ? 's' : '')}`
        }
    }

    toString() {
        return this.bodyLines.join('\n')
    }
}

function getRFCFromFS() {
    const fs = require('fs')
    const content = fs.readFileSync('.github/workflows/example-rfc.txt', 'utf8')
    return new RFC(content)
}

function test() {
    const rfc = getRFCFromFS()
    console.log(rfc.workItemsSection)
    console.log(rfc.getWorkItems())
    rfc.markWorkItemAsCompleted(154)
    rfc.setActualTime(154, '2023-03-09T11:15:46Z', '2023-03-09T11:22:47Z')
    console.log(rfc.getWorkItems())
    console.log(rfc.toString())
}

test()

module.exports.RFC = RFC