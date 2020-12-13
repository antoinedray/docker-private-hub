function serialize(data) {
  if (data['schemaVersion'] === 2)
  {
    if (data['mediaType'] === 'application/vnd.docker.distribution.manifest.list.v2+json')
    {
      return data['manifests']
    }
    else
    {
      console.error('Invalid maniest type')
      return []
    }
  }
  else if (data['schemaVersion'] === 1)
  {
    var manifests = []
    manifests.push({
      "mediaType": "application/vnd.docker.container.image.v1+json",
      "size": 0,
      "digest": "not defined",
      "platform": {
        "architecture": data['architecture'],
        "os": "",
      }
    })
    return manifests
  }
  else
  {
    console.error('Invalid maniest type')
    return []
  }
}

export {
  serialize
}
