import time

def chromedriver(token, captcha_token):
  import undetected_chromedriver.v2 as uc
  import time
  options = uc.ChromeOptions()
  # options.headless=True
  print('generating fake client...')
  driver = uc.Chrome(options=options)
  print('connecting...')
  i = 0
  while i < 10:
    with driver:
      driver.get(f'https://stats.popcat.click/pop?pop_count=800&captcha_token={captcha_token}&token={token}')  # replace here with your link
      print('added 800 pops ! (next ones in 30 sec)')
    time.sleep(31)

def chromedriver_start(token, captcha_token):
  i=0
  while i < 10:
    try:
      chromedriver(token, captcha_token)
    except:
      print('crash')
      print('restarting...')
      return chromedriver_start(token, captcha_token)

def helium(headless):
  import helium as helium
  print('opening chrome as driver mode...')
  helium.start_chrome("https://popcat.click")
  print('starting clicking...')
  time.sleep(1)
  i = 0
  while i < 10:
    helium.click(helium.Point(200, 300))
  return

def start():
  func = input('Wich program do you want to execute ? (chromedriver or helium)')
  if func == "chromedriver":
    token = input('Please input your popcat token')
    captcha_token = input('Please input your popcat captcha_token')
    print('Launching undetected_chromedriver in 5 seconds')
    time.sleep(5)
    print('starting...')
    chromedriver_start(token, captcha_token)
  elif func == "helium":
    print('Launching helium in 5 seconds')
    time.sleep(5)
    print('starting...')
    helium(False)
  else:
    print("Invalid input")
    return start()

start()