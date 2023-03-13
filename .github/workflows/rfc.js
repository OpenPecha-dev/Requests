
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

    markWorkItemCompleted(workItemIdx) {
        const line = this.bodyLines[workItemIdx]
        if (line.includes('- [ ]')) {
            this.bodyLines[workItemIdx] = line.replace('- [ ]', '- [x]')
        }
    }

    setActualTime(workItemIdx, actualTime) {
        const timeLine = this.bodyLines[workItemIdx + 2]
        if (timeLine.includes('Actual time:')) {
            this.bodyLines[workItemIdx + 2] += ` ${actualTime}`
        }
    }

    toString() {
        return this.bodyLines.join('\n')
    }
}

function getRFCFromFS() {
    const fs = require('fs')
    const content = fs.readFileSync('example-rfc.txt', 'utf8')
    return new RFC(content)
}

function test() {
    const rfc = getRFCFromFS()
    console.log(rfc.workItemsSection)
    console.log(rfc.getWorkItems())
    rfc.markWorkItemCompleted(154)
    rfc.setActualTime(154, '1:30 hrs')
    console.log(rfc.getWorkItems())
    console.log(rfc.toString())
}

// test()

module.exports.RFC = RFC